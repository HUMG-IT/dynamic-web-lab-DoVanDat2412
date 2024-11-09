const request = require('supertest');
const express = require('express');

const app = express();
app.use(express.json());

// Import route và logic của bạn vào ứng dụng test
const names = [];

app.post('/api/v1/submit', (req, res) => {
    const name = req.body.name;
    names.push(name);
    res.json({ message: `Xin chào, ${name}!`, names });
});

describe('POST /api/v1/submit', () => {
    it('should return a greeting and update the names array', async () => {
        const res = await request(app)
            .post('/api/v1/submit')
            .send({ name: 'John' });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Xin chào, John!');
        expect(res.body.names).toContain('John');
    });
});