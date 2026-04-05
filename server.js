const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.redirect('/dashboard');
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

app.get('/add-product', (req, res) => {
    res.render('add-product');
});

app.get('/claim-concierge', (req, res) => {
    res.render('claim-concierge');
});

app.get('/sustainability', (req, res) => {
    res.render('sustainability');
});

app.get('/community', (req, res) => {
    res.render('community');
});

// API endpoints (for future backend integration)
app.post('/api/products', (req, res) => {
    // Handle product creation
    res.json({ success: true, message: 'Product added successfully' });
});

app.post('/api/claims', (req, res) => {
    // Handle claim creation
    res.json({ success: true, message: 'Claim submitted successfully' });
});

// 404 handler
app.use((req, res) => {
    res.status(404).send('Page not found');
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 HiveVault server running on http://localhost:${PORT}`);
    console.log(`📊 Dashboard: http://localhost:${PORT}/dashboard`);
    console.log(`➕ Add Product: http://localhost:${PORT}/add-product`);
    console.log(`🛡️  Claims: http://localhost:${PORT}/claim-concierge`);
    console.log(`🌱 Sustainability: http://localhost:${PORT}/sustainability`);
    console.log(`👥 Community: http://localhost:${PORT}/community`);
});
