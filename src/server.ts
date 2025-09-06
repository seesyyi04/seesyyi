import express, {Request, Response} from 'express';
import path from 'path';
const app = express();
const port = process.env.PORT || 3000; 

// serve static files from the root directory
app.use(express.static(path.join(__dirname, ".."))); 

// route for root url
app.get('/', (req: Request, res: Response) => {
	res.sendFile(path.join(__dirname, '..', 'index.html'));
}); 

// route for other html pages
app.get('/', (req: Request<{ page: string }>, res: Response) => {
	const page = req.params.page; 
	if (page.endsWith('.html')) {
		res.sendFile(path.join(__dirname, '..', page));
	} else {
		const filePath = path.join(__dirname, '..', '${page}.html');
		res.sendFile(filePath, (err) => {
			if (err) { res.sendFile(path.join(__dirname, '..', 'index.html')); }
		});
	}
});
app.listen(port, () => { console.log('Server running on port ${port}'); });