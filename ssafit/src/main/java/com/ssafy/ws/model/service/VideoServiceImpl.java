package com.ssafy.ws.model.service;

import com.ssafy.ws.model.dao.VideoDao;
import com.ssafy.ws.model.dto.Video;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VideoServiceImpl implements VideoService {

    private final VideoDao videoDao;

    @Autowired
    public VideoServiceImpl(VideoDao videoDao) {
        this.videoDao = videoDao;
    }

    @Override
    public List<Video> getList() {
        return videoDao.selectAll();
    }

    @Override
    public Video searchVideoById(int id) {
        videoDao.updateViewCnt(id);
        return videoDao.selectById(id);
    }


}
