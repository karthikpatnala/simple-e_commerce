const {db} = require('../models/index.js')
const Review = db.reviews

const addReview = async (req, res) => {

    const id = parseInt(req.params.id)

    let info = {
        productId: id,
        rating: req.body.rating,
        description: req.body.description
    }

    //const review = await Review.create(data)
    const review = await Review.create(info)

    res.status(200).send(review)

}

const getAllReviews = async (req, res) => {

    const reviews = await Review.findAll()
    res.status(200).send(reviews)

}

module.exports = {
    addReview,
    getAllReviews
}