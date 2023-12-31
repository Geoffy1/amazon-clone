//import styles from '../styles/Home.module.css'
import PicDropzone from './components/PicDropzone'
import Posts from './components/Posts'
export default function Home() {
    return (
        <div className='flex'>
            <div className='p-5'>
            <PicDropzone/>
            </div>
            <div className="p-5 bg-gray-100 min-h-screen w-full">
                <Posts/>
            </div>
        </div>
    )
}