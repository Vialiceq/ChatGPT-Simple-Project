import axios from "axios";

async function getAnswer(question) {
  const prompts = question.toString();
  const response = await axios.post(
    "https://api.openai.com/v1/completions",
    {
      model: "text-davinci-003",
      prompt: prompts,
      max_tokens: 500,
      
    },
    {
      headers: {
        Authorization: `Bearer ${your_token}`, // replace with your token
        
        "Content-Type": "application/json",
      },
    }
  ).then((response) => {
    console.log(response.data.choices[0].text.trim());
    return response
  }).catch((err) => {console.error(err)});
  // return console.log(response.data.choices[0].text.trim());

  return response.data.choices[0].text.trim();
 
}



export default getAnswer;
