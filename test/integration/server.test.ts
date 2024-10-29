import request from 'supertest';
import { app, Shutdown } from '../../src/server';

describe('Our Application', () => {
    
    afterAll((done) => {
        Shutdown(done)
    })

    it('Starts and has the proper test environment', async () => {
        expect(process.env.NODE_ENV ).toBe('test');
        expect(app).toBeDefined();

    }, 10000);

    it("Return all optoins allowed to be called by customers (http method)", async() => {
        const res = await request(app).options('/')
        expect(res.status).toBe(200);
        expect(res.headers['access-control-allow-methods']).toBe('PUT, POST, PATCH, DELETE, GET');
    })
})