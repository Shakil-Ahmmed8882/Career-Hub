const myFilter = (array, matcher)=>{
      const filteredArray = []
      array.forEach(e => {
            if(e.job_type === matcher){
                  filteredArray.push(e)
            }
      })

      return filteredArray
}

export default myFilter