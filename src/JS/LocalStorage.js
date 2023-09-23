const getFromLocalStorage = () =>{
      const retrievedData = localStorage.getItem('applied-jobs')
      if(retrievedData){
            return JSON.parse(retrievedData)
      }
      return []
}


const saveToLocalStorage = id =>{
      const dataInLs = getFromLocalStorage()
      const isExist = dataInLs.find(idx => idx === id);

      if(!isExist){
            dataInLs.push(id)
            localStorage.setItem('applied-jobs',JSON.stringify(dataInLs))
      } 
}

export {getFromLocalStorage,saveToLocalStorage}