import React from 'react'
import PropTypes from 'prop-types'

class AboutLorem extends React.Component {
  accordian (e) {
    e.target.classList.toggle('selected')
  }
  render () {
    return (
      <div>
        <h2>About Lorem Ipsum</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
        <p>See <a href='http://www.lipsum.com/' target='_blank'>ipsum.com</a> for more information. This site also has a "lorem ipsum" generator for paragraphs, words, bytes, and lists.</p>
        <h4>Sample Lorem Ipsum</h4>
        <p>The following samples were created using the Lorem Ipsum generator on <a href='http://www.lipsum.com/' target='_blank'>ipsum.com</a> starting with 'Lorem ipsum dolor sit amet".</p>
        <p>
          <a className='expandItem' onClick={(e) => this.accordian(e)}>3 Paragraphs:</a>
          <div className='expandingblock'>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas non ipsum ut magna hendrerit ultrices. Ut eu quam. Nam molestie, eros a bibendum scelerisque, magna sem venenatis arcu, vitae consectetuer arcu lacus vitae risus. Donec pede. Phasellus nulla. Phasellus venenatis. Donec tellus nunc, scelerisque nec, rutrum at, mattis malesuada, sem. Phasellus fringilla neque at dui. Aliquam iaculis lorem ac lorem. Nulla vitae arcu in sem adipiscing aliquet. Ut tincidunt, justo tempus rhoncus accumsan, sem risus consequat nulla, eu sollicitudin libero tellus a ipsum. Vivamus in purus. Donec blandit sodales magna. Cras interdum leo vel nibh. Cras fermentum hendrerit eros. Maecenas vestibulum imperdiet purus. Nulla facilisi. Cras elit lorem, iaculis id, elementum et, luctus at, mi. Suspendisse nulla lectus, suscipit vitae, sollicitudin ac, lobortis sed, odio.
            </p>
            <p>Aenean et turpis ac ante condimentum pharetra. Fusce vitae justo et eros placerat varius. Suspendisse vitae sapien. Donec at ante vel sapien volutpat tristique. Mauris posuere. Pellentesque aliquam luctus nisl. Integer dapibus neque sed sapien. Aenean tellus nisl, tristique at, tempor ac, condimentum lacinia, lectus. Duis elementum fermentum risus. Mauris rutrum dui id nulla. Phasellus sodales ante vitae ipsum. Aliquam nibh. Donec dolor. Nam orci. Aliquam sagittis turpis id est. In ante. Vivamus pretium libero et lacus. Fusce laoreet suscipit nisi.
            </p>
            <p>Proin lacinia vehicula velit. Phasellus varius augue in arcu sagittis pretium. Mauris id dui. Donec laoreet gravida magna. Cras euismod tellus eu enim. Quisque mauris diam, vulputate at, interdum sit amet, lobortis vel, nisi. Etiam fringilla rutrum felis. Praesent adipiscing. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. Suspendisse pretium auctor massa. Etiam a elit. Sed purus ante, pulvinar non, auctor ut, fringilla nec, enim. Donec in felis. Vestibulum quam purus, lacinia sit amet, mollis a, ornare eget, nisl. Phasellus felis lorem, porttitor vitae, vehicula non, egestas eget, erat. Fusce sit amet nisi eget pede ornare laoreet.
            </p>
          </div>
        </p>

        <p>
          <a className='expandItem' onClick={(e) => this.accordian(e)}>5 Words:</a>
          <div className='expandingblock'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </p>

        <p>
          <a className='expandItem' onClick={(e) => this.accordian(e)}>150 Bytes:</a>
          <div className='expandingblock'>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vestibulum tristique. Praesent tellus magna, condimentum id, pulvinar luctus, imperdiet sed.
            </p>
          </div>
        </p>

        <p>
          <a className='expandItem' onClick={(e) => this.accordian(e)}>1 List:</a>
          <div className='expandingblock'>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </li>
              <li>Fusce lobortis tellus nec diam.
              </li>
              <li>Curabitur elementum nisi in tortor.
              </li>
              <li>Vivamus quis justo quis pede nonummy posuere.
              </li>
              <li>Praesent dictum pede vel odio.
              </li>
            </ul>
          </div>
        </p>

      </div>
    )
  }
}

export default AboutLorem
