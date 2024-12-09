let keywords = [
  "Law Dissertation Writing",
  "Dissertation Methodology Help",
  "Dissertation Proposal Writing",
  "Dissertation Statistics Help",
  "Qualitative Data Dissertation",
  "Dissertation Abstract Writing",
  "Dissertation Literature Review Help",
  "Dissertation Discussion Writing",
  "Dissertation Writing Service in London",
  "Cheap Dissertation Writing Services",
  "Assignment writing service London",
  "Professional assignment writers UK",
  "Best assignment help London",
  "Custom assignment writing UK",
  "Affordable assignment writers London",
  "Top assignment writing services UK",
  "Expert assignment assistance London",
  "Online assignment help UK",
  "Business Assignment Help London",
  "Nursing Assignment Writers UK",
  "Engineering Assignment Help London",
  "Psychology Assignment Assistance UK",
  "Finance Assignment Writers London",
  "Economics Assignment Help UK",
  "Marketing Assignment Help UK",
]

// Keep a static copy of the original keywords for later use
let static_keywords = [...keywords]

// Convert the keywords to the required file names
keywords = keywords.map((keyword) => {
  keyword = keyword.replaceAll(" ", "-") // Replace spaces with hyphens
  keyword = keyword.toLowerCase() // Convert to lowercase
  return `${keyword}.jpeg` // Append ".jpeg"
})

// Create the message
let message = `**Instructions for Image Generation and File Naming:**
    
  We need to generate images using the keywords provided below. Once the images are generated, please save them with the corresponding file names. These **exact** file names should be used after conversion:
    
  1. Each keyword should be written in **lowercase** and separated by hyphens (instead of spaces).
  2. Save the images with the extension **.jpeg**.
  3. Once all images are saved, please **zip** the files and send them to me.
    
  Here are the exact file names to use:
  
  ${keywords.map((keyword, index) => `${static_keywords[index]} - ${keyword}`).join("\n")}
    
  Please generate images for all these keywords, save them as .jpeg files with the above names, and send the files in a **ZIP** folder.`

console.log(message)
