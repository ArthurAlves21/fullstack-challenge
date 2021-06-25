import books from '../../models/book';
import dbConnect from '../../utils/dbConnect';

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) { 
      case 'GET':
          try {
              const book = await books.find();
              res.status(200).json({ success: true, data: book})
          } catch (error) {
              res.status(400).json({ success: false });
          }
          break;
      case 'POST':
          try {
              const note = await Cards.create(req.body);

              res.status(201).json({ success: true, data: note })
          } catch (error) {
              res.status(400).json({ success: false });
          }
          break;
      default:
          res.status(400).json({ success: false });
          break;
  }
}