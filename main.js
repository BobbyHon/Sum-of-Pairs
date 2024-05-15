function sumPairs(ints, s) {
    //My GOD, this took a long time to do... 
    let intsSet = Array.from(new Set(ints))
    console.log(intsSet)
    let answer = [0, 0]
    let answerIndex = ints.length
    
    for (let i = 0; i < intsSet.length; i++)
      {
        if (i > answerIndex){
          return answer
        }
        
        let check = intsSet[i]
        if (intsSet.includes(s - check, i))
          {
            if (s / 2 != check)
              {
                let index = ints.indexOf(s - check)
                if (answerIndex > index)
                  {
                    answer = [check, s - check]
                    answerIndex = index
                  }
              }
            else{
              let index1 = ints.indexOf(s - check)
              let index2 = ints.indexOf(s - check, index1 + 1)
            
              if (answerIndex > index2 && index2 != -1)
                {
                  answer = [check, s - check]
                  answerIndex = index2
                }
            }
          }
        }
  
    return answerIndex == ints.length ? undefined : answer
  }
  
    /* Other attemps...
    let answer = [ints.length, ints.length]
    
    for(let i = 0; i < ints.length; i++){
      if (i > answer[2])
        {
          return answer
        }
      
      for (let j = 1 + i; j < ints.length; j++){
        if (ints[i] + ints[j] == s && answer[1] > j)
          {
            answer = [ints[i],ints[j]]
          }
      }
    }
  
    return answer[0] + answer[1] != s ? undefined : answer;
    */
  
  /*
    let answer = [ints.length, ints.length]
    let answerIndex = ints.length
    for (let i = 0; i < ints.length; i++){
      if (answerIndex[1] < i)
        {
          return answer
        }
      
      let copyInts = ints.slice(i + 1)
      while (copyInts.length > 0){
        if (copyInts[0] + ints[i] == s)
          {
            const index = ints.slice(i + 1).indexOf(s - ints[i]) + i + 1
            if (answerIndex > index)
              {
                answer = [ints[i], ints[index]]
                answerIndex = index
              }
            copyInts = []
          }
        else{
          copyInts = copyInts.filter((x) => x != copyInts[0])
        }
      }
      
    return answer[0] + answer[1] != s ? undefined : answer
      
      
      /*
      if (ints.includes(s - ints[i], i + 1))
        {
          const index = ints.slice(i + 1).indexOf(s - ints[i]) + i + 1
          if (answerIndex[1] > index)
            {
              answer = [ints[i], ints[index]]
              answerIndex = [i, index]
            }
        }
        */
  