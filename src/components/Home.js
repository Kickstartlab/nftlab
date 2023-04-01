import React, { useEffect } from 'react'
import Footer from './Footer'
import Menu from './Menu'
import star from '../assets/star.png';
import side from '../assets/side.png';
import side_2 from '../assets/side_2.png';
import work from '../assets/work.png';
import diff from '../assets/diff.png';
import and from '../assets/and.png';
import dif_1 from '../assets/dif_1.png';
import dif_2 from '../assets/dif_2.png';
import dif_3 from '../assets/dif_3.png';
import dif_4 from '../assets/dif_4.png';
import nft from '../assets/nft.png';
import top from '../assets/top.png';
import work_1 from '../assets/work_1.png';
import work_2 from '../assets/work_2.png';
import work_3 from '../assets/work_3.png';
import work_4 from '../assets/work_4.png';
import work_5 from '../assets/work_5.png';
import line_1 from '../assets/line_1.png';
import line_2 from '../assets/line_2.png';
import Aos from 'aos';
import 'aos/dist/aos.css';


export default function Home() {

    useEffect(() => {
        Aos.init({
            duration: 3000,
        });
        Aos.refresh();
    }, [])

    return (
        <div className="font-dmsans overflow-hidden">

            {/* top section */}

            <img src={top} className='absolute top-0'></img>

            <div className="lg:px-20 px-5 bg-top relative z-20">
                <div className='container mx-auto'>

                    <Menu />
                    <div className="flex flex-col justify-center items-center gap-y-12 lg:py-24 py-6">
                        <div className="text-center lg:w-8/12">

                            <h2 data-aos='fade-up' className='md:text-6xl text-3xl font-dmsans font-bold capitalize'>
                                revolutionising the way You interact with the world of
                            </h2>
                            <h2 data-aos='fade-up' className='md:text-6xl text-3xl font-dmsans font-bold capitalize text-gradient pb-2'>
                                digital art
                            </h2>

                            <p data-aos='fade-out' className='pt-8 pb-6 lg:text-xl leading-loose lg:w-10/12 lg:flex mx-auto'>
                                With the power of AI technology, NFT Lab provides a fast, secure, and reliable platform for minting, buying, and selling NFTs.
                            </p>

                            <div data-aos='zoom-in' className="flex items-center justify-center lg:gap-12 gap-6 mx-auto">
                                <a href="/">
                                    <button className="border py-2 text-lg md:px-8 px-3 rounded-full font-semibold mt-5">
                                        Explore now
                                    </button>
                                </a>

                                <a href="/">
                                    <button className="text-white-100 py-2 text-lg md:px-14 px-5 rounded-full font-semibold mt-5 bg-blue-100 shadow-lg">
                                        Create
                                    </button>
                                </a>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {/* about us section */}

            <div id='about' className="lg:px-20 px-5 lg:py-20">
                <div className='container mx-auto'>

                    <div data-aos="zoom-in" data-aos-delay="350" className='absolute right-0 left-1/2 -ml-44 -mt-12 lg:block hidden'>
                        <img src={and} alt="Logo" className='' />
                    </div>

                    <div className="lg:flex block justify-center items-center gap-x-44 py-12">

                        <div data-aos="fade-left" className="lg:w-1/2 w-full">

                            <h2 className='md:text-5xl text-3xl font-bold '>
                                Who Are We?
                            </h2>

                            <p className='py-5 font-semibold text-lg'>
                                NFT Lab is revolutionising the way creators, artists, and collectors interact with the world of digital art and ownership. With the power of AI technology, NFT Lab provides a fast, secure, and reliable platform for minting, buying, and selling NFTs.
                            </p>

                        </div>

                        <div data-aos="fade-left" className="lg:w-1/2 w-full  lg:text-right">

                            <h2 className='md:text-5xl text-3xl font-bold '>
                                What are we doing?
                            </h2>

                            <p className='py-5 font-semibold text-lg'>
                                NFT Lab creators are given the ability to showcase their digital assets and maintain control over their intellectual property, allowing them to monetize their work in ways that were previously impossible.
                            </p>

                        </div>

                    </div>
                </div>
            </div>

            {/* features section */}

            <div id='features' className="lg:px-20 px-5 lg:py-20 py-5">
                <div className='container mx-auto'>
                    <h3 className="md:text-5xl text-2xl font-dmsans font-semibold text-center capitalize">
                        How we are <span className='text-gradient'>Different</span>?
                    </h3>

                    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 items-start mt-8'>

                        <div className='flex flex-col items-center justify-center text-center bg-white-100 shadow-custom rounded-xl py-8 px-6 space-y-5 hover:border-2 hover:border-blue-100'>
                            <img src={dif_1} alt="Logo" className='' />
                            <h5 className='text-xl font-semibold'>
                                User Friendly
                            </h5>
                            <p>
                                NFT Lab's user-friendly interface and security features make it easy for users to create and manage their NFTs, even for those without technical expertise. Its focus on empowering creators and providing a diverse marketplace for collectors ensures that it remains at the forefront of the NFT ecosystem.
                            </p>
                        </div>

                        <div className='flex flex-col items-center justify-center text-center bg-white-100 shadow-custom rounded-xl py-8 px-6 space-y-5 hover:border-2 hover:border-blue-100'>
                            <img src={dif_2} alt="Logo" className='' />
                            <h5 className='text-xl font-semibold'>
                                Text to NFT
                            </h5>
                            <p>
                                NFT Lab's user-friendly interface and security features make it easy for users to create and manage their NFTs, even for those without technical expertise. Its focus on empowering creators and providing a diverse marketplace for collectors ensures that it remains at the forefront of the NFT ecosystem.
                            </p>
                        </div>

                        <div className='flex flex-col items-center justify-center text-center bg-white-100 shadow-custom rounded-xl py-8 px-6 space-y-5 hover:border-2 hover:border-blue-100'>
                            <img src={dif_3} alt="Logo" className='' />
                            <h5 className='text-xl font-semibold'>
                                Mint a Text to NFT
                                in NFT Lab
                            </h5>
                            <p>
                                NFT Lab's user-friendly interface and security features make it easy for users to create and manage their NFTs, even for those without technical expertise. Its focus on empowering creators and providing a diverse marketplace for collectors ensures that it remains at the forefront of the NFT ecosystem.
                            </p>
                        </div>

                        <div className='flex flex-col items-center justify-center text-center bg-white-100 shadow-custom rounded-xl py-8 px-6 space-y-5 hover:border-2 hover:border-blue-100'>
                            <img src={dif_4} alt="Logo" className='' />
                            <h5 className='text-xl font-semibold'>
                                Stake your NFTlab NFTS.
                            </h5>
                            <p>
                                NFT Lab's user-friendly interface and security features make it easy for users to create and manage their NFTs, even for those without technical expertise. Its focus on empowering creators and providing a diverse marketplace for collectors ensures that it remains at the forefront of the NFT ecosystem.
                            </p>
                        </div>
                        <img src={diff} alt="Logo" className='left-0 absolute lg:block hidden -z-10' />

                    </div>

                </div>
            </div>

            {/* How it Works */}

            <div id='working' className="mt-8">

                <div className="lg:py-20 py-5 lg:px-20 px-5 container mx-auto">

                    <img src={side_2} alt="Logo" className='left-0 absolute lg:block hidden -z-10' />

                    <h3 className="md:text-5xl text-2xl font-dmsans font-semibold text-center capitalize">
                        How NFTlab bot <span className='text-gradient'>Works</span>?
                    </h3>

                    <div>
                        <div className='lg:flex gap-x-12 items-center'>
                            <img src={work_1} alt="Logo" className='' />

                            <div data-aos="fade-right" className="lg:w-1/2 w-full">

                                <h2 className='md:text-3xl text-xl font-bold '>
                                    User generates a new wallet with bot
                                </h2>

                                <p className='py-5 font-semibold text-lg text-gray-50'>
                                    To mint NFTs with Nftlab bot, users need to first connect their wallet to the platform. If they do not have a wallet, the bot can generate one for them and fund it.
                                </p>

                            </div>
                        </div>

                        <img src={side} alt="Logo" className='right-0 absolute lg:block hidden' />

                        <img src={line_1} alt="Logo" className='right-1/4 -mr-20 -mt-36 absolute lg:block hidden' />

                        <div className='lg:flex gap-x-12 items-center justify-end mt-16'>

                            <div data-aos="fade-left" className="lg:w-1/3 w-full text-right">

                                <h2 className='md:text-3xl text-xl font-bold '>
                                    Next Comes Funding
                                </h2>

                                <p className='py-5 font-semibold text-lg text-gray-50'>
                                    User adds funds to wallet (mint price + gas).the bot can
                                    help them with the funding and also do it for them
                                </p>

                            </div>

                            <img src={work_2} alt="Logo" className='' />

                        </div>

                        <img src={line_2} alt="Logo" className='right-1/4 -mr-20 -mt-12 absolute lg:block hidden' />

                        <div className='lg:flex gap-x-12 items-center lg:mt-40 mt-5'>
                            <img src={work_3} alt="Logo" className='' />

                            <div data-aos="fade-right" className="lg:w-1/2 w-full">

                                <h2 className='md:text-3xl text-xl font-bold '>
                                    User generates image with text prompt
                                </h2>

                                <p className='py-5 font-semibold text-lg text-gray-50'>
                                    Once connected, users can generate an image with a text prompt, and then click on the "Mint to NFT" button to initiate the minting process.
                                </p>

                            </div>
                        </div>

                        <img src={line_1} alt="Logo" className='right-1/4 -mr-20 -mt-36 absolute lg:block hidden' />

                        <div className='lg:flex gap-x-12 items-center justify-end lg:mt-16 mt-6'>

                            <div data-aos="fade-left" className="lg:w-1/2 w-full text-right">

                                <h2 className='md:text-3xl text-xl font-bold '>
                                    Bot asks which wallet to mint to
                                </h2>

                                <p className='py-5 font-semibold text-lg text-gray-50'>
                                    During the minting process, the bot will prompt the user to select the wallet to which the NFT will be minted.
                                </p>

                            </div>

                            <img src={work_4} alt="Logo" className='' />

                        </div>

                        <img src={work} alt="Logo" className='right-0 absolute mt-32 lg:block hidden -z-10' />

                        <img src={line_2} alt="Logo" className='right-1/4 -mr-20 -mt-12 absolute lg:block hidden' />

                        <div className='lg:flex gap-x-12 items-center lg:mt-40'>
                            <img src={work_5} alt="Logo" className='' />

                            <div data-aos="fade-right" className="lg:w-1/2 w-full">

                                <h2 className='md:text-3xl text-xl font-bold '>
                                    User can also withdraw funds / nFTs from wallet
                                </h2>

                                <p className='py-5 font-semibold text-lg text-gray-50'>
                                    The user can also withdraw funds or NFTs from their wallet using the bot.
                                </p>

                            </div>
                        </div>

                    </div>

                </div>

            </div>

            {/* tokenomics */}

            <div className="">

                <div className="lg:py-20 py-5 lg:px-20 px-5 container mx-auto">

                    <h3 className="md:text-5xl text-2xl font-dmsans font-semibold text-center capitalize">
                        NFTLab bot uses <span className='text-gradient'> cutting-edge technology </span>
                    </h3>

                    <p className='lg:text-2xl text-gray-50 text-center font-semibold lg:w-8/12 lg:flex mx-auto mt-6'>
                        NFTLab bot uses cutting-edge technology to ensure that the minting process is secure, fast, and reliable.By providing a user-friendly interface and simple step-by-step instructions, the bot makes it easy for anyone
                        to mint their own NFTs and get involved in the exciting world of
                        digital ownership.
                    </p>

                    <h3 id='tokenomics' className="md:text-5xl text-2xl text-gradient font-semibold text-center capitalize lg:py-12 py-5">
                        TOKENOMICS
                    </h3>

                    <div className='md:flex items-center justify-center gap-40'>

                        <div>
                            <p className='lg:text-2xl text-lg text-gray-50 font-semibold'>
                                TOKEN NAME: NFT Lab
                            </p>
                            <p className='lg:text-2xl text-lg text-gray-50 font-semibold'>
                                Symbol:NLAB
                            </p>
                            <p className='lg:text-2xl text-lg text-gray-50 font-semibold'>
                                Total supply: 1,000,000,000 $NLAB
                            </p>
                            <p className='lg:text-2xl text-lg text-gray-50 font-semibold mt-8'>
                                TAX 5/5
                            </p>

                            <div className='flex items-center gap-x-6 mt-5'>
                                <button className='rounded-lg border-2 border-gray-100 py-1 px-4 flex items-center gap-x-3 text-gray-100 md:text-lg'>

                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.9104 13.2849V7.98151C0.9104 6.02884 1.60077 4.36214 2.98152 2.98139C4.36226 1.60065 6.02897 0.910278 7.98163 0.910278H18.5885C20.5411 0.910278 22.2079 1.60065 23.5886 2.98139C24.9693 4.36214 25.6597 6.02884 25.6597 7.98151V18.5884C25.6597 20.541 24.9693 22.2077 23.5886 23.5885C22.2079 24.9692 20.5411 25.6596 18.5885 25.6596H7.98163C6.02897 25.6596 4.36226 24.9692 2.98152 23.5885C1.60077 22.2077 0.9104 20.541 0.9104 18.5884V13.2849Z" fill="#F13BFA" />
                                    </svg>

                                    Marketing

                                </button>

                                <button className='rounded-lg border-2 border-gray-100 py-1 px-4 flex items-center gap-x-3 text-gray-100 md:text-lg'>

                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.9104 13.2849V7.98151C0.9104 6.02884 1.60077 4.36214 2.98152 2.98139C4.36226 1.60065 6.02897 0.910278 7.98163 0.910278H18.5885C20.5411 0.910278 22.2079 1.60065 23.5886 2.98139C24.9693 4.36214 25.6597 6.02884 25.6597 7.98151V18.5884C25.6597 20.541 24.9693 22.2077 23.5886 23.5885C22.2079 24.9692 20.5411 25.6596 18.5885 25.6596H7.98163C6.02897 25.6596 4.36226 24.9692 2.98152 23.5885C1.60077 22.2077 0.9104 20.541 0.9104 18.5884V13.2849Z" fill="#E690F3" />
                                    </svg>

                                    Development

                                </button>
                            </div>

                        </div>

                        <div className='flex items-center lg:my-0 mt-16 lg:ml-0 ml-8'>

                            <svg className='absolute h-96 -ml-12' width="228" height="455" viewBox="0 0 228 455" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M227.578 0C197.74 -3.55814e-07 168.194 5.87703 140.627 17.2955C113.061 28.714 88.013 45.4504 66.9144 66.549C45.8157 87.6477 29.0794 112.695 17.6609 140.262C6.24238 167.829 0.365355 197.375 0.365356 227.213C0.365357 257.051 6.24239 286.596 17.6609 314.163C29.0794 341.73 45.8158 366.778 66.9144 387.876C88.013 408.975 113.061 425.711 140.627 437.13C168.194 448.548 197.74 454.425 227.578 454.425V440.634C199.551 440.634 171.799 435.114 145.905 424.388C120.012 413.663 96.4841 397.942 76.6661 378.124C56.8481 358.306 41.1275 334.779 30.4021 308.885C19.6767 282.992 14.1563 255.24 14.1563 227.213C14.1563 199.186 19.6767 171.433 30.4021 145.54C41.1275 119.646 56.8481 96.1188 76.6661 76.3007C96.4841 56.4827 120.012 40.7622 145.905 30.0367C171.799 19.3113 199.551 13.791 227.578 13.791V0Z" fill="#F13BFA" />
                            </svg>

                            <div className='w-40 h-80 bg-purple-100 circle-half text-white-100 text-2xl font-semibold flex items-center justify-center'>
                                2.5%
                            </div>
                            <div className='w-32 h-64 bg-purple-50 circle-half-1 text-white-100 text-2xl font-semibold flex items-center justify-center'>
                                2.5%
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            {/* roadmap */}

            <div id="roadmap" className="lg:py-12 py-6 lg:px-8 px-5 container mx-auto"
            >
                <h3 className="md:text-5xl text-2xl font-dmsans font-semibold text-center uppercase text-gradient">
                    Roadmap
                </h3>

                <div className="lg:mt-12 mt-6 lg:p-12 p-6">

                    <div className="h-1 w-full bg-blue-50">

                    </div>

                    <div className='h-1 w-full line -translate-y-1'>

                    </div>

                    <div className="lg:flex items-baseline justify-between gap-6 lg:px-20 lg:space-y-0 space-y-6 -mt-2.5">

                        <div className="flex flex-col items-center">
                            <div
                                data-aos="zoom-in"
                                className="absolute -mt-3.5 lg:block hidden"
                            >
                                <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#3749E9" />
                                    <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#3749E9" />
                                </svg>

                            </div>

                            <div className="border-l border-blue-100 lg:mt-5 mt-0 mb-3 h-14"></div>

                            <div
                                data-aos="flip-right"
                                className="border border-blue-100 rounded-2xl p-5 lg:w-72 "
                            >
                                <h5 className="text-2xl pt-4 font-semibold text-blue-100">Phase 1</h5>

                                <ul className="list-disc p-4 text-gray-50 font-inter">
                                    <li>Social Media set up: Twitter, Medium and Telegram</li>
                                    <li>Website</li>
                                    <li>Community building</li>
                                    <li>Bot V1</li>
                                    <li>Stealth Launch</li>
                                    <li>White Paper Release</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div
                                data-aos="zoom-in"
                                className="absolute -mt-3.5 lg:block hidden"
                            >
                                <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#3749E9" />
                                    <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#3749E9" />
                                </svg>
                            </div>

                            <div className="border-l border-blue-100 lg:mt-5 mt-0 mb-3 h-14"></div>

                            <div
                                data-aos="flip-left"
                                className="border border-blue-100 rounded-2xl p-5 lg:w-72 "
                            >
                                <h5 className="text-2xl pt-4 font-semibold text-blue-100">Phase 2</h5>

                                <ul className="list-disc p-5 text-gray-50 font-inter">
                                    <li>CMC Listing</li>
                                    <li>CG Listing</li>
                                    <li>Bot V2</li>
                                    <li>Listing on tier 3-2 exchange</li>
                                    <li>Large Marketing Campaigns</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div
                                data-aos="zoom-in"
                                className="absolute -mt-3.5 lg:block hidden"
                            >
                                <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#3749E9" />
                                    <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#3749E9" />
                                </svg>
                            </div>

                            <div className="border-l border-blue-100 lg:mt-5 mt-0 mb-3 h-14"></div>

                            <div
                                data-aos="flip-left"
                                className="border border-blue-100 rounded-2xl p-5 lg:w-72 "
                            >
                                <h5 className="text-2xl pt-4 font-semibold text-blue-100">Phase 3</h5>

                                <ul className="list-disc p-5 text-gray-50 font-inter">
                                    <li>Strategic Partnerships</li>
                                    <li>New Exchanges Listing CEX</li>
                                    <li>Further community growth</li>
                                    <li>Large Marketing Campaigns</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* sell nft */}

            <div
                className="lg:py-12 py-5 lg:px-20 px-5 container mx-auto"
            >
                <div className='lg:flex items-center justify-between'>
                    <div className='lg:w-1/3'>
                        <h3 className="md:text-4xl text-2xl font-dmsans font-semibold capitalize">
                            Creat and Sell Your <br></br><span className='text-blue-100'>NFTs</span>
                        </h3>

                        <p className='text-gray-100 font-semibold text-lg py-5'>
                            fast, secure, and reliable platform for minting, buying, and selling NFTs.
                        </p>

                        <div className="flex items-center gap-8 mx-auto">
                            <a href="/">
                                <button className="text-white-100 py-2 md:px-8 px-3 rounded-full font-semibold mt-5 bg-blue-100 shadow-lg">
                                    Creat Item
                                </button>
                            </a>
                            <a href="/">
                                <button className="border py-2 md:px-6 px-3 rounded-full font-semibold mt-5">
                                    Discover more
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className='lg:w-1/2'>
                        <img src={nft} alt="Logo" className='lg:float-right w-10/12 sm:flex mx-auto lg:mt-0 mt-6' />
                    </div>
                </div>

            </div>

            <Footer />
        </div >
    )
}
