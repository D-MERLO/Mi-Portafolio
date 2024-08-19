import style from './page.module.css';
import Link from 'next/link';

const Home = () => {
    return (
        <>
            <section id='home' className="flex flex-col">
                <img className={`${style.portada} w-auto`} src="/portadaDev.png" alt="portada developer" />
                <div className={`${style.perfil} flex`}>
                    <img className='ml-20' src="/perfil.png" alt="foto de perfil" />
                    <div className={`${style.saludo} flex flex-col items-start justify-center w-screen `}>
                        <img src="/hola.svg" alt="Hola!" />
                        <h2>FULLSTACK DEVELOPER ESPECIALIZADA EN FRONTEND</h2>
                        <h3>Soy Argentina y encontré un nuevo mundo en el desarrollo web.</h3>
                        <div className='flex justify-center w-[80%]'>
                            <Link href="https://drive.google.com/file/d/1fKqTsucGLh6aIVMyrWejtw63NuLMKkmb/view?usp=sharing" target='_blank' className='mt-2 bg-[#E8D954] rounded-[20px] py-[5px] px-[50px] hover:bg-[#f7e760]'>Mi CV</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section id='aboutMe' className={`${style.aboutMe} flex flex-col justify-center w-screen bg-black text-white py-7 px-20 `}>
                <img className={style.estrellas} src="/estrellas.svg" alt="estrellas" />
                <h2 className='flex justify-center' >MI OBJETIVO</h2>
                <div className='flex flex-col items-center'>
                    <h3>... Ayudar a otros ... </h3>
                    <h3>si asi de simple, busco ayudar a personas y empresas a mostrar su potencial
                        mediante webs funcionales que contengan su esencia</h3></div>
            </section>
            <section id='technologies' className='relative flex flex-col items-center top-[20rem]'>
                <h2 className='absolute font-bold p-3 bg-white z-1 top-[-1rem]'>TECNOLOGIAS</h2>
                <img className='w-[75%]' src="/linea.svg" alt="linea" />
                <div className={`${style.scroll}`}>
                    <img className='relative h-16 mx-6 transition-all duration-300 top-12 filter grayscale hover:filter-none ' src="/css.svg" alt="css" />
                    <img className='relative h-16 mx-6 transition-all duration-300 top-12 filter grayscale hover:filter-none ' src="/html.svg" alt="html" />
                    <img className='relative h-16 mx-6 transition-all duration-300 top-12 filter grayscale hover:filter-none ' src="/js.svg" alt="javascript" />
                    <img className='relative h-16 mx-6 transition-all duration-300 top-12 filter grayscale hover:filter-none ' src="/ts.svg" alt="typescript" />
                    <img className='relative h-16 mx-6 transition-all duration-300 top-12 filter grayscale hover:filter-none ' src="/next.svg" alt="next" />
                    <img className='relative h-16 mx-6 transition-all duration-300 top-12 filter grayscale hover:filter-none ' src="/react.svg" alt="react" />
                    <img className='relative h-16 mx-6 transition-all duration-300 top-12 filter grayscale hover:filter-none ' src="/tailwind.svg" alt="tailwind" />
                    <img className='relative h-16 mx-6 transition-all duration-300 top-12 filter grayscale hover:filter-none ' src="/bootstrap.svg" alt="bootstrap" />
                    <img className='relative h-16 mx-6 transition-all duration-300 top-12 filter grayscale hover:filter-none ' src="/posgreSQL.svg" alt="posgreSQL" />
                    <img className='relative h-16 mx-6 transition-all duration-300 top-12 filter grayscale hover:filter-none ' src="/mongoDB.svg" alt="mongoDB" />
                    <img className='relative h-16 mx-6 transition-all duration-300 top-12 filter grayscale hover:filter-none ' src="/node.svg" alt="node" />
                    <img className='relative h-16 mx-6 transition-all duration-300 top-12 filter grayscale hover:filter-none ' src="/express.svg" alt="express" />
                    <img className='relative h-16 mx-6 transition-all duration-300 top-12 filter grayscale hover:filter-none ' src="/figma.svg" alt="figma" />

                    <img className='relative h-16 mx-6 transition-all duration-300 top-12 filter grayscale hover:filter-none ' src="/css.svg" alt="css" />
                    <img className='relative h-16 mx-6 transition-all duration-300 top-12 filter grayscale hover:filter-none ' src="/html.svg" alt="html" />
                    <img className='relative h-16 mx-6 transition-all duration-300 top-12 filter grayscale hover:filter-none ' src="/js.svg" alt="javascript" />
                    <img className='relative h-16 mx-6 transition-all duration-300 top-12 filter grayscale hover:filter-none ' src="/ts.svg" alt="typescript" />
                    <img className='relative h-16 mx-6 transition-all duration-300 top-12 filter grayscale hover:filter-none ' src="/next.svg" alt="next" />
                    <img className='relative h-16 mx-6 transition-all duration-300 top-12 filter grayscale hover:filter-none ' src="/react.svg" alt="react" />
                    <img className='relative h-16 mx-6 transition-all duration-300 top-12 filter grayscale hover:filter-none ' src="/tailwind.svg" alt="tailwind" />
                    <img className='relative h-16 mx-6 transition-all duration-300 top-12 filter grayscale hover:filter-none ' src="/bootstrap.svg" alt="bootstrap" />
                    <img className='relative h-16 mx-6 transition-all duration-300 top-12 filter grayscale hover:filter-none ' src="/posgreSQL.svg" alt="posgreSQL" />
                    <img className='relative h-16 mx-6 transition-all duration-300 top-12 filter grayscale hover:filter-none ' src="/mongoDB.svg" alt="mongoDB" />
                    <img className='relative h-16 mx-6 transition-all duration-300 top-12 filter grayscale hover:filter-none ' src="/node.svg" alt="node" />
                    <img className='relative h-16 mx-6 transition-all duration-300 top-12 filter grayscale hover:filter-none ' src="/express.svg" alt="express" />
                    <img className='relative h-16 mx-6 transition-all duration-300 top-12 filter grayscale hover:filter-none ' src="/figma.svg" alt="figma" />

                    <img className='relative h-16 mx-6 transition-all duration-300 top-12 filter grayscale hover:filter-none ' src="/css.svg" alt="css" />
                    <img className='relative h-16 mx-6 transition-all duration-300 top-12 filter grayscale hover:filter-none ' src="/html.svg" alt="html" />
                    <img className='relative h-16 mx-6 transition-all duration-300 top-12 filter grayscale hover:filter-none ' src="/js.svg" alt="javascript" />
                    <img className='relative h-16 mx-6 transition-all duration-300 top-12 filter grayscale hover:filter-none ' src="/ts.svg" alt="typescript" />
                    <img className='relative h-16 mx-6 transition-all duration-300 top-12 filter grayscale hover:filter-none ' src="/next.svg" alt="next" />
                    <img className='relative h-16 mx-6 transition-all duration-300 top-12 filter grayscale hover:filter-none ' src="/react.svg" alt="react" />
                    <img className='relative h-16 mx-6 transition-all duration-300 top-12 filter grayscale hover:filter-none ' src="/tailwind.svg" alt="tailwind" />
                    <img className='relative h-16 mx-6 transition-all duration-300 top-12 filter grayscale hover:filter-none ' src="/bootstrap.svg" alt="bootstrap" />
                    <img className='relative h-16 mx-6 transition-all duration-300 top-12 filter grayscale hover:filter-none ' src="/posgreSQL.svg" alt="posgreSQL" />
                    <img className='relative h-16 mx-6 transition-all duration-300 top-12 filter grayscale hover:filter-none ' src="/mongoDB.svg" alt="mongoDB" />
                    <img className='relative h-16 mx-6 transition-all duration-300 top-12 filter grayscale hover:filter-none ' src="/node.svg" alt="node" />
                    <img className='relative h-16 mx-6 transition-all duration-300 top-12 filter grayscale hover:filter-none ' src="/express.svg" alt="express" />
                    <img className='relative h-16 mx-6 transition-all duration-300 top-12 filter grayscale hover:filter-none ' src="/figma.svg" alt="figma" />
                </div>

                <img className='relative top-[5rem] w-[30%]' src="/linea.svg" alt="linea" />
                <img className='absolute p-2 bg-white z-1 top-[9rem]' src="/arabesco.svg" alt="arabesco" />
            </section>
            <section id='projects' className='relative top-[27rem] flex flex-col items-center p-10 my-5 bg-[#1E1E1E] text-white '>
                <h2>PROYECTOS</h2>
                <div className='flex flex-col w-[40%] m-7'>
                    <img className='my-3 filter grayscale hover:filter-none' src="/easytasks.svg" alt="proyecto" />
                    <div className='mb-2'>
                        <div className='flex justify-between'>
                            <h3 className='font-bold '>EasyTasks</h3>
                            <h2>FRONTEND</h2>
                        </div>
                        <h3>Gestor de tareas orientado a desarrolladores web que trabajen con modalidades ágiles. Se conforma de sprints, descripción, asignación y estados de tareas.</h3>
                    </div>
                    <div className='flex items-center justify-between mt-2 '>
                        <div className='flex'>
                            <img className='w-10 mr-2 filter grayscale hover:filter-none' src="/next.svg" alt="next" />
                            <img className='w-10 mr-2 filter grayscale hover:filter-none' src="/ts.svg" alt="typescript" />
                            <img className='w-10 mr-2 filter grayscale hover:filter-none' src="/tailwind.svg" alt="tailwind" />
                        </div>
                        <Link className='flex justify-center bg-[#E8D954] rounded-[20px] py-[2px] px-[50px] hover:bg-[#f7e760] text-black w-[20%]' href="https://easy-task-cyan.vercel.app/" target='blank' >VER</Link>
                    </div>
                </div>
            </section>
            <section id='contact' className='relative top-[27rem] flex flex-col items-center p-10 my-5'>
                <div className='flex'>
                    <div className='flex flex-col items-center justify-center pr-20 text-lg border-r-2 border-black'>
                        <h2>CONTACTO</h2>
                        <h3 className='flex justify-center bg-[#E8D954] py-[2px] px-[50px] my-1 mt-2 '>¡No dudes en contactarme!</h3>
                        <Link className='flex justify-center rounded-[20px] py-[2px] px-[30px] border border-black border-spacing-1 hover:bg-[#ebe9e9] ' href="https://calendly.com/delmar-5702/30min" target='blank' ><img className='w-5 mr-2 ' src="/calendarN.svg" alt="icono calendario" />Para agendar entrevista aquí</Link>
                    </div>
                    <div className='flex flex-col justify-center pl-10 ml-10 text-lg'>
                        <div className='flex my-1 hover:underline'><img className='h-5 mx-2 mt-1' src="/linkedin.svg" alt="linkedin" /><Link href="https://www.linkedin.com/in/delfinamerlo/" target='blank' >Delfina Merlo</Link></div>
                        <div className='flex my-1'><img className='h-5 mx-2 mt-1' src="/email.svg" alt="email" /><h3>delmar.5702@gmail.com</h3></div>
                        <div className='flex my-1'><img className='h-5 mx-2 mt-1' src="/phone.svg" alt="telefono" /><h3>+542804721105</h3></div>
                        <div className='flex my-1 hover:underline'><img className='h-5 mx-2 mt-1' src="/github.svg" alt="github" /><Link href="https://github.com/D-MERLO" target='blank' >D-MERLO</Link></div>
                        <div className='flex my-1'><img className='h-5 mx-2 mt-1' src="/ubicacion.svg" alt="ubicacion" /><h3>Buenos Aires, Argentina.</h3></div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home;
