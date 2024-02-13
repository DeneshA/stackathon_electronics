const { Schema, default: mongoose } = require('mongoose')

const computerSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    type:{ type: String, required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    display: { type: String, required: true },
    processor: { type: String, required: true },
    ram: { type: String, required: true },
    storage: { type: String, required: true },
    condition:: { type: String, required: true },
    graphicsCard: { type: String, required: true },
    price: { type: String, required: true },
    features: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = ingredientSchema

// const id = new mongoose.Types.Decimal128('3.1415');