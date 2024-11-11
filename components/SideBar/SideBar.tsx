import Image from "next/image";

function SideBar() {
  return ( 
    <div className="w-[310px] h-screen flex-shrink-0 sticky top-0">
      <Image src='/assets/images/logo.svg' alt="PiuPiuwer" width={226} height={40} className="pt-8 pb-8 mx-auto" />

      <nav className="SideBar__nav">
        <ul className="flex flex-col gap-2">
          <li className="selected">
            <Image src='/assets/icons/home.svg' alt="" width={18} height={18}  />
            Página inicial
          </li>
          <li>
            <Image src='/assets/icons/notificacao.svg' alt="" width={18} height={18}  />
            Notificações
          </li>
          <li>
            <Image src='/assets/icons/msgs.svg' alt="" width={18} height={18}  />
            Mensagens
          </li>
          <li>
            <Image src='/assets/icons/salvos.svg' alt="" width={18} height={18}  />
            Salvos
          </li>
          <li>
            <Image src='/assets/icons/perfil.svg' alt="" width={18} height={18}  />
            Perfil
          </li>
          <li>
            <Image src='/assets/icons/config.svg' alt="" width={18} height={18}  />
            Configurações
          </li>
        </ul>
      </nav>
      
      <Image src='/assets/images/user.png' alt="User Profile" width={40} height={40} className="mx-auto mt-4 rounded-full" />
      <button className="mx-auto mt-4 flex items-center">
        <Image src='/assets/icons/logout.svg' alt="Logout" width={40} height={40} className="mx-auto" />
      </button>
    </div>
   );
}

export default SideBar;