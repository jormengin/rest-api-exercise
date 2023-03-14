const router = require('express').Router();
const Show = require('../models/Show');

// @desc   Get all shows
// @route   GET /
// @access  Public
router.get('/', async (req,res,next)=>{
    try {
        const shows = await Show.find({})
        res.status(200).json(shows)
    } catch (error) {
        res.status(404).json('cannot find your page')
    }
})

// @desc    Get one show
// @route   GET /
// @access  Public

router.get('/:showId', async (req,res,next)=>{
    const {showId} = req.params
    try {
        const show = await Show.findById(showId)
        res.status(201).json(show)
    } catch (error) {
        res.status(404).json('cannot find your page')
    }
})

// @desc    Edit one show
// @route   PUT SHOWS/SHOWID
// @access  Public

router.put('/:showId', async (req,res,next)=>{
    const {showId} = req.params
    try {
        const editedShow = await Show.findByIdAndUpdate(showId, req.body)
        res.status(201).json(editedShow)
    } catch (error) {
        res.status(404).json('cannot find your page')
    }
})

// @desc    Create one show
// @route   POST
// @access  Public

router.post('/', async (req,res,next)=>{
    try {
        const newShow = await Show.create(req.body)
        res.status(201).json(newShow)
    } catch (error) {
        res.status(404).json('cannot find your page')
    }
})
// @desc    Delete one show
// @route   DELETE courses/courseId
// @access  Public

router.delete('/:showId', async (req,res,next)=>{
    const {showId} = req.params
    try {
        const deletedShow = await Show.findByIdAndDelete(showId)
        res.status(201).json(deletedShow)
    } catch (error) {
        res.status(404).json('cannot find your page')
    }
})





module.exports = router;