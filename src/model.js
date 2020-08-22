import img from './assets/image.jpeg'
import {TextBlock, TitleBlock, ImageBlock, TextColumnsBlock} from './classes/blocks'

export const model = [
    new TitleBlock('Исландия', {tag:'h2', styles: 'background: #bbc8ce; color: #fff; text-align: center'}),
    new TextBlock('Что обязательно к просмотру?', {styles: 'background: #5f7a86; color: #bdc7ca'}),
    new TextColumnsBlock(['Скафтафедль', 'Суртсей', 'Долина гейзеров Хёйкадалюр', 'Водопад Гюдльфосс'], {styles: 'padding: 1rem'}),
    new TitleBlock('Важные достопримечательности', {}),
    new ImageBlock(img, {alt: 'картинка', styles:'padding: 2rem 0; ', imageStyles:'height: auto' }),
]
