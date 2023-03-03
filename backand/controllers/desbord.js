const Employ = require("../model/modelstudent/employmodel")
const studentcountry = require("../model/modelstudent/modelcuntrycode")
  const stdudentcourse = require("../model/modelstudent/modelstudentcourse")
 const studentsub = require("../model/modelstudent/modelstudent")

const allapi = async (req, res) => {
let courses = await stdudentcourse.find({})
  let employ = await Employ.find({})
  let contry = await studentcountry.find({})
  let subname = await studentsub.find({})
     
   const arr=[
    employ={ 

        Image:  "https://cdn.elearningindustry.com/wp-content/uploads/2019/09/online-courses-what-students-want.jpg",
         name:"employ",
         data:employ
        
        
    }, 
    contry={ 
                    
        Image:"https://watermark.lovepik.com/photo/20211130/large/lovepik-primary-school-students-study-picture_501212451.jpg",
        name:"contry",
        data:contry
    
    }, 
         
           
         
    subname={ 
          
           Image: "https://wallpaperaccess.com/full/4322025.jpg",
           name: "subjectname",
           data: subname
     },
      
     courses={
      Image: "https://wallpaperaccess.com/full/4322025.jpg",
      name: "courses",
      data: courses
     }
        
   ]
   
//   let x = [];
//   x.push(emp)
//   x.push(stude)
//   x.push(stu)
//   x.push(sub)
//   res.send(x); 
  res.send(arr)
 }


module.exports = { allapi }