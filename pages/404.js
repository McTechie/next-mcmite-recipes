import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
    
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 4000)
    }, [])

    return (
        <div className="not-found">
            <h1>404</h1>
            <h2>Ooooops! That page cannot be found :&#40;</h2>
            <p>Redirecting to <Link href="/">Homepage</Link> for more Mcmite goodness...</p>

            <style jsx>{`
                .not-found {
                    background: #fff;
                    color: #B91C1C;
                    padding: 30px;
                    box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
                    transform: rotateZ(-1deg);
                }
                .not-found h1 {
                    font-size: 3em;
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
                .not-found h2 {
                    position: relative;
                    top: -30px;
                }
                .not-found p {
                    position: relative;
                    top: -20px;
                }
            `}</style>
        </div>
    );
}
 
export default NotFound;