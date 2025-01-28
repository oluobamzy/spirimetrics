import dotenv from 'dotenv';


dotenv.config();

const postImage = async(req, res) => {
  
    const { image, name } = req.body;
    const encodedParams = new URLSearchParams();
    encodedParams.set('image', `${image}`);
    encodedParams.set('name', `${name}`);
    
    const url = 'https://upload-images-hosting-get-url.p.rapidapi.com/upload';
    const options = {
      method: 'POST',
      headers: {
        'x-rapidapi-key': `${process.env.XRAPIDAPIKEY}`,
        'x-rapidapi-host': `${process.env.XRAPIDAPIHOST}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: encodedParams
    };
    
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      if (!response.ok) {
        throw new Error(result);
      }
      res.status(201).json({message: 'Image uploaded successfully', data: result});
      console.log(result);
    } catch (error) {
      console.error(error);
    }
    
};

const getImage = async(req, res) => {
  console.log('Get image');
  res.send('Get image');
};

export default { postImage, getImage };