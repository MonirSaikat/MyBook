const { getDictionary } = require("@/lib/mongodb/dictionary")

const handler = async (req, res) => {
    if (req.method === 'GET') {
        try {
            const { dictionary, error } = await getDictionary();
            if (error) throw new Error(error);
            return res.status(200).json({ dictionary });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    res.setHeader('Allow', ['GET']);
    res.status(425).end(`Method ${req.method} is not allowed`);
}

export default handler;