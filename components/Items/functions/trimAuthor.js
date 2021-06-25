export default function trimAuthor (author){
  if(author.length > 12){
    return author.substring(0, 9)+'...';
  }else{
    return author;
  }
}