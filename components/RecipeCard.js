import Link from 'next/link'
import Image from 'next/image'

const RecipeCard = ({ recipe }) => {
    const { title, slug, cookingTime, thumbnail } = recipe.fields

    return (
        <div className="card">
            <div className="featured">
                <Image
                    src={'https:' + thumbnail.fields.file.url}
                    // width={thumbnail.fields.file.details.image.width}
                    // height={thumbnail.fields.file.details.image.height}
                    width={600}
                    height={450}
                />
            </div>
            <div className="content">
                <div className="info">
                    <h4>{title}</h4>
                    <p>Takes approx {cookingTime} mins to make</p>
                </div>
                <div className="actions">
                    <Link href={'/recipes/' + slug}><a>Cook this</a></Link>
                </div>
            </div>
            {/* Inline styles in JSX */}
            <style jsx>{`
                .card {
                    transform: rotateZ(-1deg);
                    padding: 5%;
                }
                .content {
                    background: #fff;
                    box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
                    margin: 0;
                    position: relative;
                    top: -40px;
                    left: -10px;
                }
                .info {
                    padding: 16px;
                }
                .info h4 {
                    margin: 7px 0;
                    text-transform: uppercase;
                    color: #111;
                }
                .info p {
                    margin: 0;
                    color: #777;
                }
                .actions {
                    margin-top: 20px;
                    display: flex;
                    justify-content: flex-end;
                }
                .actions a {
                    background: #B91C1C;
                    color: #fff;
                    padding: 16px 24px;
                    text-decoration: none;
                }
                @media screen and (max-width: 768px) {
                    .info {
                        padding: 10px;
                    }
                    .actions {
                        margin-top: 0;
                    }
                    .actions a {
                        padding: 10px 18px;
                    }
                    .info, .actions {
                        font-size: 0.6em;
                    }
                }
          `}</style>
        </div>
    );
}
 
export default RecipeCard;