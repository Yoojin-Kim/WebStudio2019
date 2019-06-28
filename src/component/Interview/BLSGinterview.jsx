import React from 'react';
import { Layout, Carousel } from 'antd';
import './BLSGinterview.css'
import { onChange } from './onChange';
import image1 from '../BLSG.svg';

//const { SubMenu } = Menu;
const { Content } = Layout;

class BLSGinterview extends React.Component{   
  render(){
    return(
  <Layout>
    <Content style={{ padding: '0 24px', minHeight: 280 }}>
        Content
        <Carousel afterChange={onChange}>
            <div>
                <img src = {image1}/>
            </div>
            <div>
            <h1>자리상으로 자신의 오른쪽에 있는 멤버 분 소개를 부탁드려요.</h1>
            <h2>영주 : 어, (현수는) 우리 막둥이에요. 아, 소개를 멋있게 해주고 싶은데 뭐라고 해야 할지 모르겠네. 저희 막둥이 드러머 현수입니다! 할 말이 없네요. (웃음) 제가 아끼는 후배예요. 민망하니까 빨리 넘어가요. 아우, 민망해! 저 이런 거 안 해봤어요.
{"\n"} 현수 : (기준은) 영어를 제일 잘하시고 (웃음) 저희 밴드의 약간 돌아이를 담당하고 있어요. 음.. 나댐? 을 맡고 있는 스물아홉살 베이스. 항상 좋은 퍼포먼스 보여주시죠.
{"\n"} 기준 : 이준행 씨도 좋은 퍼포먼스를 보여주고 가창력도 좋고 노래도 잘 부르고 비주얼.. 담당인줄 알았는데 요즘 수염을 길러서 욕을 먹고 있고. 요즘 쿠킹 연습을, 에어프라이어 연습을 아주 많이 하는! (준행 : 칭찬을 해줘, 좀!) 놀러 가면 치킨도 먹을 수 있고.. (준행 : 소개를 하라고!) 음, 국문학 현대시 전공! 석사 4학기죠.
{"\n"} 준행 : 저희가 약간 정신 사나운 컨셉인데 저희 지훈이는 가장 침착하고 절제된 퍼포먼스를 잘 하고 잘 안 움직여요. 건반을 굉장히 화려하게 치지만 굉장히 감성적이에요. 저희 벤치위레오가 가장 부족한 게 바로 감성이거든요. 그 부분을 채워주는 좋은 멤버죠. 또 키가 크기 때문에 (지훈 : 갑자기?) 저희 꼬맹이들을 잘 몰고 다니는 그런 친구입니다. 하여튼 되게 든든하게 의지가 많이 됩니다.
{"\n"}지훈 : 영주는 제가 지금까지 봤던 사람 중에 기타를 제일 잘 치고, 기타만 잘 치는 줄 알았는데 프로듀싱도 정말 잘 해서 항상 저나 준행이 형이 던져준 쓰레기 같은 데모를 어떻게든 살려서 멋진 작품을 만들어내요. 약간.. 허준 같은? 그.. 죽은 음악도 살리는!
{"\n"}준행 : 잘 나가다 비유가 좀.. (웃음)</h2>
            </div>
            <div>
            <h1>제가 인터넷에서 벤치위레오 프로필을 살펴봤는데 3(+2)인조 밴드라고 나와 있더라고요. 무슨 뜻인지 궁금해요.</h1>
            <h2>준행 저희가 일단 저희 세 명(준행, 지훈, 기준)이 정멤버예요.
저희 멜론 프로필 보면 저희 세 명이 나와있어요. 그리고 이제
현수, 영주는 사실상 가족인데 객원멤버로 해주고 있어요. 이 두
친구들이 전공을 음악으로 한 친구들이어서 드럼, 기타, 그리고
작곡까지 해주는 친구들이에요. 저희 정멤버는 서강대학교
학생들이고 이 친구들(현수, 영주)은 객원으로 되어 있긴 하는데
모든 공연을 함께 하고 있어요.
영주 저는 앨범 프로듀싱은 쭉 하고 있었는데 기타로 참여한 건
작년 7월부터예요.
준행 저희가 그래도 페이는 줍니다.
현수 노예계약을 한거죠. (웃음)
영주 한 번도 남이라고 생각해본 적은 없어요. 그리고 저랑
현수는 이것(벤치위레오 활동)만 하는 게 아니라 다른 일도
추가적으로 하는데, 소속감을 강요하는 게 부담스러웠어요.
그래서 정중하게 조금만 배려해달라고 얘기를 해서 객원이
되었죠. 어쨌든 가족 같은 사이죠.</h2>
            </div>
            <div>
            <h3>3</h3>
            </div>
            <div>
            <h3>4</h3>
            </div>
        </Carousel>
        
    </Content>
  </Layout>
  );
}
}

export default BLSGinterview
