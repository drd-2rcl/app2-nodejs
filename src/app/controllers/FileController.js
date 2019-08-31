import File from '../models/FIle';

class FileController {
  async store(req, res) {
    const { originalname, name, filename, path } = req.file;

    const file = await File.create({
      name,
      path,
    });
  }
}

export default new FileController();
