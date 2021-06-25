import books from '../../../models/book';
import dbConnect from '../../../utils/dbConnect';

dbConnect();

export default async (req, res) => {
    const {
        method,
      } = req;

      switch (method) { 
        case 'POST':
            try {
                const book = await books.create(req.body)
                res.status(201).json({success: true, data:book});
            } catch (error) {
                res.status(400).json({ success: 'false' });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}