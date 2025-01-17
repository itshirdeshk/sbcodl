import ImageCard from './ImageCard'
import school_bg from '../../assets/images/school_bg.jpeg'
import { Button } from '@repo/ui/button'

const SchoolSection = () => {
    const item = {
        image: school_bg,
        desc1: 'Lower School',
        desc2: 'JK - 5',
    }
    return (
        <div className='flex flex-col md:flex-row w-full px-10 relative h-[100vh]'>
            <div className=' md:w-[40%] flex flex-col justify-center'>
                <div className='text-5xl font-light tracking-wider text-gray-500 leading-[1.1]'>
                    Empowering students with learning differences to achieve their fullest potential.
                </div>
                <div className='text-md font-light tracking-wider text-gray-500 mt-6 leading-[1.4]'>
                    As a private boarding school in Brentwood , Tennessee, Currey Ingram Academy settles for nothing less than being a global leader for students with learning differences. Our students receive the education they deserve by promoting strengths and supporting differences.
                </div>
                <div className='flex flex-col gap-2 mt-5 '>
                    <Button variant='outline' className=' text-primary px-5 py-5 text-lg w-fit'>Head of School</Button>
                    <Button variant='outline' className=' text-primary px-5 py-5 text-lg w-fit'>Learn More</Button>
                </div>
            </div>

            <div className='w-full md:w-[60%] flex flex-col justify-center items-center relative md:ml-[20px] mt-[80px]'>

                <div className='absolute top-[50px] left-[80px] '>
                    <ImageCard item={item} />
                </div>

                <div className='absolute top-[265px] left-[40px]'>
                    <ImageCard item={item} />
                </div>
                <div className='absolute  top-[100px] left-[438px]'>
                    <ImageCard item={item} />
                </div>
                <div className='absolute top-[318px] left-[399px]'>
                    <ImageCard item={item} />
                </div>
                <div className='absolute  top-[490px] left-[250px]'>
                    <ImageCard item={item} />
                </div>


            </div>


        </div>
    )
}

export default SchoolSection