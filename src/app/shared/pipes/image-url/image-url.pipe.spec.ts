import { ImageUrlPipe } from './image-url.pipe';
import { environment } from 'src/environments/environment';

describe('ImageUrlPipe', () => {
  let pipe: ImageUrlPipe;

  beforeEach(() => {
    pipe = new ImageUrlPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return the correct image URL', () => {
    const id = '1';
    const size = 1000;
    const expectedUrl = `${environment.baseApi}id/${id}/${size}.jpg`;
    const result = pipe.transform(id, size);
    expect(result).toEqual(expectedUrl);
  });
});
