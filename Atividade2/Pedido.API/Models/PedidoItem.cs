namespace Pedido.API.Models
{
    public class PedidoItem
    {
        public int CodigoPedido { get; set; }
        public Cliente Cliente { get; set; }
        public Produto Produto { get; set; }
    }
}