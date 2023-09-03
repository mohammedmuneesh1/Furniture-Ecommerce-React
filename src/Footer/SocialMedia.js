import { MDBIcon} from 'mdb-react-ui-kit';
const SocialMedia=()=>{
    return(
        <div className="socialmedia-main">
            <p>Like What You See? Follow us Here</p>
            <div className="socialmedia-icon">
            <a href=''  className='sm-icon'>
              <MDBIcon fab icon='facebook-f' style={{ color: '#1877F2' }} />
            </a>
            <a href=''  className='sm-icon'>
              <MDBIcon fab icon='twitter' style={{ color: '#1DA1F2' }} />
            </a>
            <a href=''  className='sm-icon'>
              <MDBIcon fab icon='google' style={{ color: '#DB4437' }} />
            </a>
            <a href='' className='sm-icon'>
              <MDBIcon fab icon='instagram' style={{ color: '#E4405F' }} />
            </a>
            <a href='' className='sm-icon'>
  <MDBIcon fab icon='linkedin' style={{ color: '#0A66C2' }} />
</a>
            </div>
        </div>

    )

}
export default SocialMedia;
