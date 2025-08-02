import '../App.css';
import '../style.css';
import '../font.css';
import '../workDetailPage/style_works.css';
import { ArticleMainImage } from '../components/ArticleMainImage';
import { Thumbnail } from '../components/WorkThumbnail';

export function ArticleTitle(props: {
    title: string; 
    description : React.ReactNode ;
    category : string;
    date : string;
    showButton?: boolean;
    buttonLabel?: string;
    buttonHref?: string;
    thumbnail?:string;
}) {
    return (
        <div className='articleTitleSection'> 
         <div className='articleTitleSectionGap'> 
                {props.thumbnail && (
                    <ArticleMainImage image={props.thumbnail} />
                )}
                <div className='gap48'>
                    <div className='articleTitleSectionTitleGap'>
                    <div className='articlePageTitle'>{props.title}</div>
                    <div className='articlePageDescription'>{props.description}</div>
                    </div>
                        <div className='articleTitleSectionTag'>
                            <div className='articlePageCategory'>{props.category}</div> 
                            ·
                            <div className='articlePageDate'>{props.date}</div>
                        </div>  
                    </div>
                </div>
            <div>   
        </div>
        </div>
    )
}
