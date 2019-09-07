export const addBlock = (context: any): void => {
  context.setState({
    clicks: context.state.clicks + 1,
    rows: context.state.rows.concat(context.state.clicks)
  })
}