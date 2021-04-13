import Orphanage from '../models/Image';

export default {
  render(image: Orphanage) {
    return {
      id: image.id,
      url: `http://192.168.1.108:3333/uploads/${image.path}`,
    }
  },

  renderMany(image: Orphanage[]) {
    return image.map(image => this.render(image));
  }
}