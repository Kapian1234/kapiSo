import "./share.scss";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
const Share = () => {

    const { currentUser } = useContext(AuthContext);

    const [file, setFile] = useState(null)
    const [desc, setDesc] = useState(null)

    const queryClient = useQueryClient()
    const mutation = useMutation(
        (newPost)=>{//执行mutation的函数
            return makeRequest.post('/posts', newPost)
        },
        {//配置对象
            //使键为posts的缓存失效，失效后会从服务器获取数据并更新缓存，保证其它地方的‘posts’是最新状态
            onSuccess: () =>{queryClient.invalidateQueries(['posts'])}
        }
    )


    const handleShare = (e) =>{
        e.preventDefault()
        mutation.mutate({desc})
        setDesc('')
    }


    return (
        <div className="share">
            <div className="container">
                <div className="top">
                    <div className="left">
                    <img src={"/upload/" + currentUser.profilePic} alt="" />
                    <input
                        type="text"
                        placeholder={`分享新鲜事...`}
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                    </div>
                    {/* <div className="right">
                    {file && (
                        <img className="file" alt="" src={URL.createObjectURL(file)} />
                    )}
                    </div> */}
                </div>

                <div className="bottom">
                    <div className="left">
                        <input
                            type="file"
                            id="file"
                            style={{ display: "none" }}
                            onChange={(e) => setFile(e.target.file[0])}//选择第一个文件
                        />
                        <label htmlFor="file">
                            <div className="item">
                                <AddPhotoAlternateIcon/>
                            </div>
                        </label>
                    </div>
                    <div className="right">
                    <button onClick={handleShare}>发布</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Share;