import type { NextPage } from 'next'
import React, { useMemo, useState } from 'react'
import styled from 'styled-components'

const COLORS = ['', 'lightblue', 'blue', 'orange', 'yellow', 'lightgreen', 'purple', 'red']

const Container = styled.div`
  height: 100vh;
  background-color: lightblue;
`
const AroundBlockArea = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 309px;
  height: 609px;
  margin: 0;
  margin-right: -50%;
  background-color: #cdcdcd;
  border: solid 5px;
  border-color: #fff #3e3e3e #3e3e3e #fff;
  transform: translate(-50%, -50%);
`
const Board = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 600px;
  margin: 0;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`
const MinBlock = styled.div<{ num: number }>`
  float: left;
  width: 30px;
  height: 30px;
  line-height: 30px;
  vertical-align: baseline;
  background-color: ${(props) =>
    props.num >= 1 && props.num <= 7 ? COLORS[props.num] : '#cdcdcd'};
  border: solid 1px #6c6c6c;
`

const Home: NextPage = () => {
  const BLOCKS = [
    [[1, 1, 1, 1]],
    [
      [2, 0, 0],
      [2, 2, 2],
    ],
    [
      [0, 0, 3],
      [3, 3, 3],
    ],
    [
      [4, 4],
      [4, 4],
    ],
    [
      [0, 5, 5],
      [5, 5, 0],
    ],
    [
      [0, 6, 0],
      [6, 6, 6],
    ],
    [
      [7, 7, 0],
      [0, 7, 7],
    ],
  ]
  const [start, gameStart] = useState(false)
  const [before, beforeBoard] = useState([
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ])
  // 一つ一つのブロックの情報
  const [block, setBlock] = useState({
    y: 1, // キーボード操作や１秒ごとに下がる
    x: 0, // キーボード操作で左右に動く
    blockIndex: 2,
    colorIndex: 3,
  })
  // setBlock(y:2, x:1, blockIndex: 2, colorIndex: 3)

  const setBoard = useMemo(() => {}, [before, block])
  // const newBoard: number[][] = JSON.parse(JSON.stringify(setBoard))

  return (
    <Container>
      <AroundBlockArea>
        <Board>
          {before.map((row, y) =>
            row.map((num, x) =>
              num === 0 ? (
                <MinBlock num={1 <= num && num <= 7 ? num : 20}></MinBlock>
              ) : (
                <MinBlock num={1 <= num && num <= 7 ? num : 20}></MinBlock>
              )
            )
          )}
        </Board>
      </AroundBlockArea>
    </Container>
  )
}

export default Home
