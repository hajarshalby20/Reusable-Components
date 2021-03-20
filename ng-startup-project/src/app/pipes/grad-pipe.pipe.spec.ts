import { GradPipePipe } from './grad-pipe.pipe';

describe('GradPipePipe', () => {
  let pipe;
beforeEach(()=>{
  pipe = new GradPipePipe();
})
let value=70
  it('value> 90', () => {
    pipe.pe.transform(value)
    expect(value).toContain("A")
  });
});
