import express from 'express';
import youtubeControllers from '../controllers/youtubeControllers.js';

const router = express.Router();  //create a router object

router.get('/video/details', youtubeControllers.videoDetails);
router.get('/video/comments', youtubeControllers.videoComments);
router.get('/video/comments/related', youtubeControllers.videoCommentsRelated);
router.get('/video/streamdata', youtubeControllers.videoStreamData);
router.get('/playlist/details', youtubeControllers.playlistDetails);
router.get('/playlist/videos', youtubeControllers.playlistVideos);
router.get('/explore/search', youtubeControllers.exploreSearch);
router.get('/explore/auto-complete', youtubeControllers.exploreAutoComplete);
router.get('/explore/trending',youtubeControllers.exploreTrending);
router.get('/explore/home', youtubeControllers.exploreHome);
router.get('/channel/details', youtubeControllers.channelDetails);
router.get('/channel/videos', youtubeControllers.channelVideos);
router.get('/channel/playlists', youtubeControllers.channelPlaylists);
router.get('/channel/search', youtubeControllers.channelSearch);

export default router;