package com.dung.geul.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.io.Serializable;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
// 업로드 결과 반환과 화면 처리

@Data
@AllArgsConstructor
public class UploadResultDTO  implements Serializable {

    private String fileName;
    private String uuid;
    private String folderPath;

    public String getImageURL(){    // 이미지 url 생성
        try {
            return URLEncoder.encode(folderPath+"/"+uuid+"_"+fileName,"UTF-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        return "";
    }

//    public String getThumbnailURL(){    // 브라우저에서 섬네일 처리
//        try {
//            return URLEncoder.encode(folderPath+"/s_"+uuid+"_"+fileName,"UTF-8");
//        } catch (UnsupportedEncodingException e) {
//            e.printStackTrace();
//        }
//        return "";
//    }

}