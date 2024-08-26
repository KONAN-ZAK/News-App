// import { useParams } from 'react-router-dom';

// const ExternalNewsPage = ({ articles }) => {
//     const { id } = useParams();
//     const article = articles[id];

//     if (!article) {
//         return <div>Article not found</div>;
//     }

//     return (
//         <div className="article-page">
//             <h1 className="text-2xl font-bold my-4">{article.title}</h1>
//             <img src={article.urlToImage} alt={article.title} className="w-full h-64 object-cover mb-4" />
//             <p className="text-gray-700">{article.description}</p>
//             <p className="text-gray-500 mt-4">{article.content}</p>
//             <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Read more</a>
//         </div>
//     );
// };

// export default ExternalNewsPage;
