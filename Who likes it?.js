

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

// likes [] // must be "no one likes this"
// likes ["Peter"] // must be "Peter likes this"
// likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"


function likes(names) {
    if (names.length == 0) 
      {       
           return ("no one likes this");
      }
      else if (names.length == 1) 
        {        
            return (`${names[0]} likes this`)
        }
         else if (names.length > 1 && names.length < 4) 
         {
            let result = names[0]
            for (let i=1; i < names.length; i++) 
              {
                if (i == names.length-1) 
                  {
                    result = result + ` and ${names[i]} like this`
                  }
                  else 
                    {
                      result = result + `, ${names[i]}`
                    }
              }    
            return (result)     
         } 
          else 
            {
  
              return (`${names[0]}, ${names[1]} and ${names.length-2} others like this` )
            }
             
    }   
        