import dotenv from 'dotenv';
dotenv.config();

const exploreSearch = async (req, res) => {
  const { searchQuery } = req.body;
  const url = `https://youtube138.p.rapidapi.com/search/?q=${searchQuery}&hl=en&gl=US`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': `${process.env.XRAPIDAPIKEY}`,
      'x-rapidapi-host': `${process.env.YOUTUBEAPIHOST}`
    }
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
    res.status(200).json({ message: 'Search results', data: result });
  } catch (error) {
    console.error(error);
  }
};
const exploreAutoComplete = async (req, res) => {
  res.send('Explore Auto Complete');
};
const exploreTrending = async (req, res) => {
  const url = 'https://youtube138.p.rapidapi.com/v2/trending';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': `${process.env.XRAPIDAPIKEY}`,
    'x-rapidapi-host': `${process.env.YOUTUBEAPIHOST}`
  }
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
  res.status(200).json({ message: 'Trending videos', data: result });
} catch (error) {
	console.error(error);
}
  // res.send('Explore Trending');
};
const exploreHome = async (req, res) => {
  res.send('Explore Home');
};
const channelDetails = async (req, res) => {
  const {channelId} = req.body;
  const url = `https://youtube138.p.rapidapi.com/v2/channel-details?channel_id=${channelId}&hl=en`;
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': `${process.env.XRAPIDAPIKEY}`,
    'x-rapidapi-host': `${process.env.YOUTUBEAPIHOST}`
  }
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
  res.status(200).json({ message: 'Channel details', data: result });
} catch (error) {
	console.error(error);
}
};
const channelVideos = async (req, res) => {
  res.send('Channel Videos');
};
const channelPlaylists = async (req, res) => {
  res.send('Channel Playlists');
};
const channelSearch = async (req, res) => {
  res.send('Channel Search');
};
const videoDetails = async (req, res) => {
  res.send('Video Details');
};
const videoComments = async (req, res) => {
  res.send('Video Comments');
};
const videoCommentsRelated = async (req, res) => {
  res.send('Video Comments Related');
};
const videoStreamData = async (req, res) => {
  res.send('Video Stream Data');
};
const playlistDetails = async (req, res) => {
  res.send('Playlist Details');
};
const playlistVideos = async (req, res) => {
  res.send('Playlist Videos');
};

export default {
  exploreSearch,
  exploreAutoComplete,
  exploreTrending,
  exploreHome,
  channelDetails,
  channelVideos,
  channelPlaylists,
  channelSearch,
  videoDetails,
  videoComments,
  videoCommentsRelated,
  videoStreamData,
  playlistDetails,
  playlistVideos
};