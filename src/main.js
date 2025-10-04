import './style.css'

document.querySelector('#app').innerHTML =/*html*/ `
  <div class="bg-slate-100 min-h-screen  ">

    <Nav id="Nav-header" class="px-8 flex items-center justify-between bx-5 py-5 bg-gray-200  ">
      <img src="/assets/icons/logo.svg" class="  hover:animate-pulse cursor-pointer" alt="logo" />
      <ul class="flex justify-between gap-4 items-center font-[Poppins] text-zinc-500 mr-4 cursor-pointer">
        <img class="hover:scale-130 transition duration-300 ease-in-out cursor-text" src="/assets/icons/MagnifyingGlass.svg" class="another-image" alt="Magnifying Glass" />
        <li class="  hover:text-orange-500 transition duration-400">Explorar</li>
        <li class="  hover:text-orange-500 transition duration-400">Minhas viagens</li>
        <img class="hover:scale-110 transition duration-300 ease-in-out h-12 w-12  " src="/assets/img-profile/Profile-pic2.svg" class="another-image" alt="Avatar" />
      </ul>
    </Nav>

    <div id="About-section" class="  px-8 py-8  flex justify-between items-center gap-5  bg-gray-200">
      <div id="Main" class=" flex items-center justify-between gap-8">
        <img src="/assets/img-profile/profile-pic2.svg" class="rounded-full w-40 h-40 " alt="Avatar" />
         <div id="bio" class=" mr-3 flex flex-col gap-3">
           <h1 class="text-3xl  font-[Poppins] font-bold text-zinc-800">Isabela Torres</h1>
           <p class="text-zinc-600 w-96 h-30 font-[Poppins]">
           Amante de viagens, cultura e gastronomia. 🌍✈️ 
           Aqui compartilho as histórias registradas em cada clique, explorando cantinhos fascinantes do nosso planeta a partir da movimentada cidade de São Paulo. 🏙️📸
           </p>
      </div>
      </div>
     
      
     <ul id="info" class=" flex flex-col gap-3 pr-20 py-5">
       <li class="flex items-center gap-2">
        <img src="/assets/icons/mapPin.svg" class="w-6 h-6" alt="Location" />
        <span class="text-zinc-600 font-[Poppins]">São Paulo, Brasil</span>
       </li>
       <li class="flex items-center gap-2">
        <img src="/assets/icons/AirplaneTilt.svg" class="w-6 h-6" alt="Location" /
        <span class="text-zinc-600 font-[Poppins]">37 países</span>
       </li>
       <li class="flex items-center gap-2">
        <img src="/assets/icons/image.svg" class="w-6 h-6" alt="Location" /
        <span class="text-zinc-600 font-[Poppins]">240 fotos</span>
       </li>
      </ul>
    </div>
    <div id="Gallery" class=" px-8 py-8 grid grid-cols-3 gap-4 ">
      <img src="/assets/img/image 02.png" class=" w-full h-60 object-cover rounded-lg hover:scale-105 transition duration-300 ease-in-out cursor-pointer" alt="Gallery Image 1" />
      <img src="/assets/img/image 01.png" class=" w-full h-60 object-cover rounded-lg hover:scale-105 transition duration-300 ease-in-out cursor-pointer" alt="Gallery Image 2" />
      <img src="/assets/img/image 03.png" class=" w-full h-60 object-cover rounded-lg hover:scale-105 transition duration-300 ease-in-out cursor-pointer" alt="Gallery Image 3" />
      <img src="/assets/img/image 04.png" class=" w-full h-60 object-cover rounded-lg hover:scale-105 transition duration-300 ease-in-out cursor-pointer" alt="Gallery Image 4" />
      <img src="/assets/img/image 05.png" class=" w-full h-60 object-cover rounded-lg hover:scale-105 transition duration-300 ease-in-out cursor-pointer" alt="Gallery Image 5" />
      <img src="/assets/img/image 06.png" class=" w-full h-60 object-cover rounded-lg hover:scale-105 transition duration-300 ease-in-out cursor-pointer" alt="Gallery Image 6" />
      <img src="/assets/img/image 07.png" class=" w-full h-60 object-cover rounded-lg hover:scale-105 transition duration-300 ease-in-out cursor-pointer" alt="Gallery Image 1" />
      <img src="/assets/img/image 08.png" class=" w-full h-60 object-cover rounded-lg hover:scale-105 transition duration-300 ease-in-out cursor-pointer" alt="Gallery Image 2" />
      <img src="/assets/img/image 09.png" class=" w-full h-60 object-cover rounded-lg hover:scale-105 transition duration-300 ease-in-out cursor-pointer" alt="Gallery Image 3" />
      <img src="/assets/img/image 10.png" class=" w-full h-60 object-cover rounded-lg hover:scale-105 transition duration-300 ease-in-out cursor-pointer" alt="Gallery Image 4" />
      <img src="/assets/img/image 11.png" class=" w-full h-60 object-cover rounded-lg hover:scale-105 transition duration-300 ease-in-out cursor-pointer" alt="Gallery Image 5" />
      <img src="/assets/img/image 12.png" class=" w-full h-60 object-cover rounded-lg hover:scale-105 transition duration-300 ease-in-out cursor-pointer" alt="Gallery Image 6" />

    </div>
    <footer class=" px-8 py-6 flex justify-between font-[Poppins] items-center">
      <span class="text-zinc-600">Feito por jvcc-dev</span>
      <span class="text-zinc-600">Travelgram © 2024</span>
      <div class=" flex justify-start gap-4  ">
         <span class="text-zinc-600  hover:text-shadow-lg/md text-shadow-orange-300  transition duration-600">Termos de uso</span>
          <span class="text-zinc-600 hover:text-shadow-lg/md text-shadow-orange-300 transition duration-600">Política de privacidade</span>
        </div>
      </footer>
  </div>
`
