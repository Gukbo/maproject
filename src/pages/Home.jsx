import '../styles/Home.css'

const Home = () => {
 return (

  <div className="main_container" >
    <div className='name_container'>
    <input className='namebox' type="text" placeholder='캐릭터명을 입력하세요.' maxLength="20" />
    <button className='namebtn'> 🔎 </button>
    </div>
    
  </div>
 )
}

export default Home;