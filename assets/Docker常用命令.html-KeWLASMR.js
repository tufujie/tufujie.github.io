import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as e,d as s}from"./app-AuAuVshg.js";const d="/assets/Docker命令小结-3VzQA969.png",l={},v=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 远程查找镜像，Images
docker search

# 查看本地的所有镜像
docker images

# 下载、拉取镜像
docker pull

# 删除镜像
docker rmi

# 创建运行容器，Containers，有了镜像才可以创建运行容器
# docker run [:可选参数] image
# 命令参数含义
--name=&quot;容器名称&quot;	# 自定义容器名称，用于区别容器
-d	# 后台运行
-it # 使用交互模式运行，进入容器
-p 	# 指定容器端口
	-p ip:宿主机端口:容器端口
	-p 宿主机端口:容器端口
	-p 容器端口
	-P 	# 随机指定端口
-e key=value #设置环境变量
-v 目录挂载

# 列出容器
docker ps -a

# 删除容器
docker rm 容器ID  # 删除指定容器，不能删除正在运行的容器

# 启动和停止容器
# 启动容器
docker start 容器ID
# 重启容器
docker restart 容器ID
# 停止容器
docker stop 容器ID
# 杀掉容器
docker kill 容器ID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+d+'" alt="Docker命令小结" tabindex="0" loading="lazy"><figcaption>Docker命令小结</figcaption></figure>',2),r=[v];function c(a,m){return n(),e("div",null,r)}const o=i(l,[["render",c],["__file","Docker常用命令.html.vue"]]);export{o as default};
