import Paper from '@mui/material/Paper';
import {Card, CardMedia, ListItem } from '@mui/material';
import * as Icons from '@mui/icons-material';
import Typography from '@mui/material/Typography';

interface SearchCardProp {
    image: string;
    title: string;
    author:string;
    description: string;
  }

function SearchCard(props:SearchCardProp){
    return(
        <Paper className="width-full rounded-lg flex flex-row h-[130px]">
        <CardMedia className="flex flex-shrink-0 rounded-lg h-[120px] w-[90px] my-auto mx-1 object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
        image={props.image}
        />
        <div className="p-1 pr-2 flex flex-col">
            <Typography className="line-clamp-1 font-sans font-medium text-slate-700 mb-1/2 text-lg">{props.title}</Typography>
            <Typography className= 'text-slate-400 mb-1 text-xs font-light'>{props.author}</Typography>
            <Typography className="line-clamp-3 text-base text-slate-600 text-left font-serif tracking-wide font-light text-ellipsist overflow-hidden">{props.description}</Typography>
        </div>
        <div className='flex flex-shrink-0 m-auto bg-yellow-400 w-[100px]'>
            <Icons.Menu className='m-auto' />
        </div>
        </Paper>
    )
}

export default SearchCard
