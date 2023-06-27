interface User {
    firstName:String,
    lastName:String
  }
  

const user:User= {
    firstName: "han",
    lastName: "sanghoon"
  }
  
  function formatName(user:User){
    return user.firstName + " " + user.lastName; 
  }

const Content = () => {
    return (
        <div className="container">
            <div className="columns-3">
                <div>1</div>
                <div className="columns-3">
                  <div>{formatName(user)}</div>
                  <div>검색바</div>
                  <div>ㅅㄷㄴㅅ</div>
                </div>
                <div>3</div>
            </div>
        </div>
    )
}

export default Content;