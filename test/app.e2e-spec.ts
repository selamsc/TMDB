import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it('/health-check (GET)', () => {
    return request(app.getHttpServer())
      .get('/health-check')
      .expect(200)
      .expect('Application server is running...');
  });

  it('/movies (GET)', () => {
    //will return movie datas
    return request(app.getHttpServer())
      .get('/movies')
      .expect(200)
      .expect((response) => {
        expect(response.body.length > 1)
      });
  });

  it('/movies/:id (GET)', () => {
    const movieId = '238';
    const movieName = 'The Godfather'

    return request(app.getHttpServer())
      .get(`/movies/${movieId}`)
      .expect(200)
      .expect((response) => {
        expect(response.body.data).toHaveProperty('id', movieId);
        expect(response.body.data).toHaveProperty('name', movieName);
      });
  });
});
