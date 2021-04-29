import { createClient } from 'contentful'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Skeleton from '../../components/Skeleton'

// Connecting to contentful client
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
  // const res = await client.getEntries({ content_type: 'recipe' })
  const { items } = await client.getEntries({ content_type: 'recipe' })

  const paths = items.map(item => {
    return {
      params: {slug: item.fields.slug}
    }
  })

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({ content_type: 'recipe', 'fields.slug': params.slug })
  
  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: { recipe: items[0] },
    revalidate: 1
  }
}

export default function RecipeDetails({ recipe }) {
  if (!recipe) return <Skeleton />

  const { featuredImage, title, cookingTime, ingredients, method } = recipe.fields

  return (
    <div>
      <div className="banner">
        <Image
          src={'https:' + featuredImage.fields.file.url}
          // width={featuredImage.fields.file.details.image.width}
          // height={featuredImage.fields.file.details.image.height}
          width={1200}
          height={700}
        />
        <h2>{title}</h2>
      </div>
      <div className="info">
        <p>Takes about {cookingTime} mins to cook!</p>
        <h3>Ingredients:</h3>
        {ingredients.map(ingredient => (
          <span key={ingredient}>{ingredient}</span>
        ))}
      </div>
      <div className="method">
        <h3>Method:</h3>
        <div>{documentToReactComponents(method)}</div>
      </div>
      <style jsx>{`
        h2,h3 {
          text-transform: uppercase;
        }
        .banner h2 {
          margin: 0;
          background: #B91C1C;
          color: #fff;
          display: inline-block;
          padding: 20px;
          position: relative;
          top: -60px;
          left: -10px;
          transform: rotateZ(-1deg);
          box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
        }
        .info p {
          margin: 0;
          color: #B91C1C;
          background: #fff;
          display: inline-block;
          padding: 20px;
          position: relative;
          top: -63px;
          left: -10px;
          transform: rotateZ(2deg);
          box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
        }
        .info span::after {
          content: ", ";
        }
        .info span:last-child::after {
          content: ".";
        }
        .info > h3, span {
          position: relative;
          top: -20px;
        }
        h3 {
          color: #921616;
        }
        .method div {
          font-size: 0.8em;
          word-wrap: break-word;
          text-align: justify;
        }
        @media screen and (max-width: 768px) {
          .banner h2 {
            font-size: 0.8em;
          }
          .info, .method {
            font-size: 0.7em;
          }
        }
      `}</style>
    </div>
  )
}