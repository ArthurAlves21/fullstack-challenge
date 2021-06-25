import books from '../../models/book';
import dbConnect from '../../utils/dbConnect';

dbConnect();

export default async (req, res) => {
    const {
        query: { id },
        method,
      } = req;

      switch (method) { 
        case 'GET':
            try {
                const data = await books.find({"_id":id});
                res.status(200).json({ success: 'true', items: data});
            } catch (error) {
                res.status(400).json({ success: 'false' });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}