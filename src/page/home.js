import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

import FoodImg from '../assets/images/food-ex.jpg'

export default function Home() {
    return (
        <>
            <Navbar/>
            <Hero/>
            <div className="container mx-auto px-5 mt-12 ">
                <div className="title-section ">
                    # Resep Hari Ini
                </div>
                <div className="flex flex-col mb-5">
                    <div className="w-full grid lg:grid-cols-3 gap-4">
                    <div className="h-auto card border-2 border-yellow-500">
                                <div className="flex justify-end">
                                    <button className="px-3 py-1 absolute -mt-6 bg-red-500 text-white font-bold">+</button>
                                </div>
                                <img className="h-40 w-full object-cover rounded-md" src={FoodImg} alt="food-one"/>
                                <div className="text-center w-full pt-4 font-semibold">
                                    Resep Udang Galah Santan Kecap, Siapkan untuk Momen Spesialmu
                                </div>
                                <div className="divide-y divide-gray-400">
                                    <div className="text-center py-2"></div>
                                    <div className="text-center py-2"></div>
                                </div>
                                <div className="flex flex-row justify-between items-center text-center px-5 mb-4  font-semibold">
                                    <div className="flex flex-col">
                                        <div className="text-sm text-gray-500">Waktu Masak</div>
                                        <div>1jam 45mnt</div>
                                    </div>
                                    <div className="flex flex-col mx-3">
                                        <div className="text-sm text-gray-500">Porsi</div>
                                        <div>8 Porsi</div>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-sm text-gray-500">Level</div>
                                        <div>Cukup Rumit</div>
                                    </div>
                                </div>
                            </div>
                    <div className="h-auto card border-2 border-yellow-500">
                                <div className="flex justify-end">
                                    <button className="px-3 py-1 absolute -mt-6 bg-red-500 text-white font-bold">+</button>
                                </div>
                                <img className="h-40 w-full object-cover rounded-md" src={FoodImg} alt="food-one"/>
                                <div className="text-center w-full pt-4 font-semibold">
                                    Resep Udang Galah Santan Kecap, Siapkan untuk Momen Spesialmu
                                </div>
                                <div className="divide-y divide-gray-400">
                                    <div className="text-center py-2"></div>
                                    <div className="text-center py-2"></div>
                                </div>
                                <div className="flex flex-row justify-between items-center text-center px-5 mb-4  font-semibold">
                                    <div className="flex flex-col">
                                        <div className="text-sm text-gray-500">Waktu Masak</div>
                                        <div>1jam 45mnt</div>
                                    </div>
                                    <div className="flex flex-col mx-3">
                                        <div className="text-sm text-gray-500">Porsi</div>
                                        <div>8 Porsi</div>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-sm text-gray-500">Level</div>
                                        <div>Cukup Rumit</div>
                                    </div>
                                </div>
                            </div>
                    <div className="h-auto card border-2 border-yellow-500">
                                <div className="flex justify-end">
                                    <button className="px-3 py-1 absolute -mt-6 bg-red-500 text-white font-bold">+</button>
                                </div>
                                <img className="h-40 w-full object-cover rounded-md" src={FoodImg} alt="food-one"/>
                                <div className="text-center w-full pt-4 font-semibold">
                                    Resep Udang Galah Santan Kecap, Siapkan untuk Momen Spesialmu
                                </div>
                                <div className="divide-y divide-gray-400">
                                    <div className="text-center py-2"></div>
                                    <div className="text-center py-2"></div>
                                </div>
                                <div className="flex flex-row justify-between items-center text-center px-5 mb-4  font-semibold">
                                    <div className="flex flex-col">
                                        <div className="text-sm text-gray-500">Waktu Masak</div>
                                        <div>1jam 45mnt</div>
                                    </div>
                                    <div className="flex flex-col mx-3">
                                        <div className="text-sm text-gray-500">Porsi</div>
                                        <div>8 Porsi</div>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-sm text-gray-500">Level</div>
                                        <div>Cukup Rumit</div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="w-full mx-3">
                        <div className="h-40 text-center flex justify-center">
                            <button className="px-3 py-2 text-2xl text-white font-bold bg-yellow-500 self-center shadow-2xl">Lebih Banyak Resep {`>`} </button>
                        </div>
                    </div>
                </div>
                {/* section */}
                <div className="title-section ">
                    # Mengapa Go Cooking
                </div>
                <div className="grid lg:grid-cols-3 gap-4 mb-32">
                    <div className="card h-64 text-center">
                        <div className="text-2xl font-bold mb-3">Lengkap</div>
                        <p className="capitalize">Kami Menyedikan Lebih Dari Ribuan Resep Makanan, lengkap mulai dari takaran bahan - bahan yang dibutuhkan untuk tiap makanan dan langkah - langkah cara Memasaknya</p>
                    </div>
                    <div className="card h-64 text-center">
                        <div className="text-2xl font-bold mb-3">Easy</div>
                        <p className="capitalize">Easy atau Mudah bagi anda yang tidak pernah masak sebelumnya dapat mencoba karna terdapat level atau tingkat kesulitan dalam tiap resep tersebut, bagi anda yang pemula bisa mengikuti level yang mudah terlebih dahulu</p>
                    </div>
                    <div className="card h-64 text-center">
                        <div className="text-2xl font-bold mb-3">Simpan Nanti</div>
                        <p className="capitalize">Simpan nanti adalah fitur untuk menandai resep yang akan user coba dikemudian hari, dengan menekan icon plus pada tiap card resep yang di tampilkan </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
