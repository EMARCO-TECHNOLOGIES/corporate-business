import React from 'react'
// import H3 from '../../H3/page'
// import CarouselComp from '../../carousal/page'

function WhyUs() {

    const sideContent = [
        {
            title: 'Info marketing',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit vel sem posuere.'
        },
        {
            title: 'Info marketing',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit vel sem posuere.'
        },
        {
            title: 'Info marketing',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit vel sem posuere.'
        },
        {
            title: 'Info marketing',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit vel sem posuere.'
        },
    ]

    return (
        <div className='flex lg:flex-row flex-col md:px-20 px-5 justify-center '
            style={{ backgroundImage: `url('/home/whyUs.png')` }}
        >
            <div className=' py-10 space-y-5 lg:w-5/6 md:text-left text-center'>
                <h1 className='text-[36px] font-bold'>WHY SUN GROUP</h1>
                {/* <div >
                    <img src="/home/image.png" alt="" className='w-full' />
                </div> */}
                <div className='flex lg:flex-row flex-col lg:space-x-5 lg:space-y-0 space-y-5'>
                    <div className='border border-[#0079DC] rounded-md p-5 lg:w-1/2 space-y-3 '>
                        <h5 className='text-[#0079DC]  text-[14px]'>CMA</h5>
                        <div >
                            <h3 >{`Mas que FLOC? Uma visão da alternativa que o Google dá para os Cookies.`}</h3>
                        </div>
                        <div>
                            <p className='text-[16px]'>A Aprendizagem Federada de Grupos (Federated Learning of Cohorts -FLoC) é uma proposta de padrão de buscador que vai permitir anúncios na web baseados nos interesses de grupos de pessoas, sem deixar que os anunciantes saibam suas identidades individuais. Assim, você estará associado (por meio do buscador) a um grupo de pessoas que tornará você um “semi-anônimo” para aquelas empresas que miram em você (para saber detalhes de sua navegação na web).</p>
                        </div>


                    </div>
                    <div className='border border-[#0079DC] rounded-md p-5 lg:w-1/2 space-y-3 '>
                        <h5 className='text-[#0079DC] text-[14px]'>Marketing Week</h5>

                        <div>
                            <h3 >{`Por que 'Jogos de guerra’ são essenciais para o future-proof marketing?`} </h3>
                        </div>
                        <div>
                            <p className='text-[16px]'>Ser capaz de aproveitar as oportunidades e superar os desafios começa com uma estratégia de marketing sólida, o que o CMO da Boots, Pete Markey, pode parecer básico, mas sem a base certa é fácil perder o rumo.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='ml-5 py-10 lg:w-1/6 space-y-5 lg:mt-16'>
                {sideContent.map((item, index) => (

                    <div key={index} className='border-t-2 p-5 border-[#0079DC] border-opacity-60 space-y-3 '>
                        <h5 className='font-semibold'>{item.title}</h5>
                        <p className='text-[16px]'>{item.desc}</p>

                    </div>
                ))}
            </div> */}
        </div>
    )
}

export default WhyUs